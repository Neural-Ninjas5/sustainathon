from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import pickle
with open('pvout_output_ridge_model.pkl', 'rb') as file: 
    model = pickle.load(file)
with open('pvout_output_ridge_model.pkl', 'rb') as file:
    model_pvout=pickle.load(file)
with open('dif_output_ridge_model.pkl', 'rb') as file:
    model_dif=pickle.load(file)
with open('dni_output_ridge_model.pkl', 'rb') as file:
    model_dni=pickle.load(file)
with open('ghi_output_ridge_model.pkl', 'rb') as file:
    model_ghi=pickle.load(file)
with open('gti_output_ridge_model.pkl', 'rb') as file:
    model_gti=pickle.load(file)
with open('temp_output_ridge_model.pkl', 'rb') as file:
    model_temp=pickle.load(file)
with open('opta_output_ridge_model.pkl', 'rb') as file:
    model_opta=pickle.load(file)

app = FastAPI()

class Item(BaseModel):
    x: float
    y: float

@app.post("/sum")
async def calculate_sum(item: Item):
    x= item.x
    y = item.y

    west_bound = 66.0
    east_bound = 98.0
    south_bound = 6.0
    north_bound = 38.0
    resolution = 120.0
    west_bound_arcsec = west_bound *3600
    east_bound_arcsec = east_bound *3600
    south_bound_arcsec = south_bound *3600
    north_bound_arcsec = north_bound *3600
    lon_arcsec = x*3600
    lat_arcsec = y*3600
    px = int((lon_arcsec - west_bound_arcsec)/resolution)
    py = int((north_bound_arcsec - lat_arcsec)/resolution)
    print(px)
    print(py)



    l=[(px,py)]
    df = pd.DataFrame(l,columns=['x','y'])
    df_opta=df.copy()
    df1=df.copy()
    df1['opta']=model_opta.predict(df_opta)
    df['dif']=model_dif.predict(df1)
    df['ghi']=model_ghi.predict(df1)
    df['gti']=model_gti.predict(df1)
    df['dni']=model_dni.predict(df1)
    df['temp']=model_temp.predict(df1)
    df['opta']=model_opta.predict(df_opta)
    pvout=model_pvout.predict(df)
    print(pvout)
    prediction = pvout
    prediction_list = prediction.tolist()  # Assuming prediction is a numpy array
    # prediction_list.append(df['dif'][0])
    prediction_list.append(df['ghi'][0])
    prediction_list.append(df['gti'][0])
    prediction_list.append(df['dni'][0])
    prediction_list.append(df['temp'][0])
    prediction_list.append(df['opta'][0])
    
    return {"prediction": prediction_list}
    # prediction = model.predict(df)
    # return {"prediction": prediction}
   