from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from tensorflow.keras.models import load_model
from tensorflow.keras.applications.mobilenet_v3 import preprocess_input

from PIL import Image
import numpy as np

# ==================================================
# FASTAPI APP
# ==================================================

app = FastAPI()

# ==================================================
# CORS CONFIGURATION
# ==================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================================================
# LOAD MODEL
# ==================================================

model = load_model("model/model_exp3.keras")

# ==================================================
# CLASS LABELS
# ==================================================

CLASS_NAMES = [
    "EmasMoneter",
    "Grootboek",
    "KacaPatri",
    "MesinCetak",
    "UangEraKerajaan",
    "UangEraKolonial",
    "UangKhusus",
    "UangPemerintah",
    "UangRIS",
    "UangToken",
]

# ==================================================
# FRONTEND CLASS MAPPING
# ==================================================

CLASS_MAPPING = {
    "EmasMoneter": "emasMoneter",
    "Grootboek": "grootBoek",
    "KacaPatri": "kacaPatri",
    "MesinCetak": "mesinCetak",
    "UangEraKerajaan": "uangIslam",
    "UangEraKolonial": "uangKolonial",
    "UangKhusus": "uangKhusus",
    "UangPemerintah": "uangPemerintah",
    "UangRIS": "ris",
    "UangToken": "uangJepang",
}

# ==================================================
# ROOT ENDPOINT
# ==================================================

@app.get("/")
def root():
    return {"status": "ok"}

# ==================================================
# MODEL TEST ENDPOINT
# ==================================================

@app.get("/test-model")
def test_model():
    return {"status": "loaded"}

# ==================================================
# PREDICTION ENDPOINT
# ==================================================

@app.get("/version")
def version():
    return {
        "version": "threshold-v1"
    }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    image = Image.open(file.file)
    image = image.convert("RGB")
    image = image.resize((224, 224))

    image_array = np.array(
        image,
        dtype=np.float32
    )

    image_array = np.expand_dims(
        image_array,
        axis=0
    )

    image_array = preprocess_input(
        image_array
    )

    predictions = model.predict(
        image_array,
        verbose=0
    )

    predicted_index = int(
        np.argmax(predictions)
    )

    confidence = float(
        np.max(predictions) * 100
    )

    model_class = CLASS_NAMES[
        predicted_index
    ]

    frontend_class = CLASS_MAPPING[
        model_class
    ]

    # ==========================================
    # UNKNOWN OBJECT THRESHOLD
    # ==========================================
    if confidence < 80:

        return {
            "class": "unknown",
            "confidence": round(
                confidence,
                2
            )
        }

    # ==========================================
    # KNOWN OBJECT
    # ==========================================
    return {
        "class": frontend_class,
        "confidence": round(
            confidence,
            2
        )
    }
    
    