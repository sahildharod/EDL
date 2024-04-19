import numpy as np
import scipy.stats
from scipy.fft import fft
import requests
import os, time
from influxdb_client_3 import InfluxDBClient3, Point
import pandas
from datetime import datetime
from urllib.parse import unquote
from scipy import signal

token = "pIs8acij-32x_dvU6WBin1ghU3VKagOpHsUWJXk2woxsATFyyiz8dcNOrFQN8v8b5Dz4bkt1rpWAqBj8Jdk3ZA=="
org = "EDL"
host = "https://us-east-1-1.aws.cloud2.influxdata.com"

client = InfluxDBClient3(host=host, token=token, org=org)

def get_latest_data_temperature(date , slot):
    decoded_date = unquote(date)
    date_object = datetime.fromisoformat(decoded_date.rstrip('Z'))
    start_of_day = date_object.replace(hour=0, minute=0, second=0, microsecond=0).isoformat() + 'Z'
    end_of_day = date_object.replace(hour=23, minute=59, second=59, microsecond=999000).isoformat() + 'Z'

    query = f"""SELECT *
    FROM 'Temperature'
    WHERE time>='{start_of_day}' AND time<='{end_of_day}'"""

    # Execute the query
    table = client.query(query=query, database="EDL-Acceleration", language='sql')

    # Convert to dataframe
    df = table.to_pandas()

    for x in df["Temperature"].tolist():
        if (x>1):
            return x

def get_latest_data_humidity(date, slot):
    decoded_date = unquote(date)
    date_object = datetime.fromisoformat(decoded_date.rstrip('Z'))
    start_of_day = date_object.replace(hour=0, minute=0, second=0, microsecond=0).isoformat() + 'Z'
    end_of_day = date_object.replace(hour=23, minute=59, second=59, microsecond=999000).isoformat() + 'Z'

    query = f"""SELECT *
    FROM 'Temperature'
    WHERE time>='{start_of_day}' AND time<='{end_of_day}'"""

    # Execute the query
    table = client.query(query=query, database="EDL-Acceleration", language='sql')

    # Convert to dataframe
    df = table.to_pandas()
    
    for x in df["Humidity"].tolist():
        if (x>1):
            return x

def get_latest_timestamp(date, slot):
    decoded_date = unquote(date)
    date_object = datetime.fromisoformat(decoded_date.rstrip('Z'))
    start_of_day = date_object.replace(hour=0, minute=0, second=0, microsecond=0).isoformat() + 'Z'
    end_of_day = date_object.replace(hour=23, minute=59, second=59, microsecond=999000).isoformat() + 'Z'

    query = f"""SELECT "Time-Stamp"
    FROM "Acceleration"
    WHERE time>='{start_of_day}' AND time<='{end_of_day}'"""

    # Execute the query
    table = client.query(query=query, database="EDL-Acceleration", language='sql')

    # Convert to dataframe
    df = table.to_pandas().sort_values(by="Time-Stamp")
    
    return df["Time-Stamp"].tolist()


def get_latest_data_acceleration_x(date, slot):
    decoded_date = unquote(date)
    date_object = datetime.fromisoformat(decoded_date.rstrip('Z'))
    start_of_day = date_object.replace(hour=0, minute=0, second=0, microsecond=0).isoformat() + 'Z'
    end_of_day = date_object.replace(hour=23, minute=59, second=59, microsecond=999000).isoformat() + 'Z'

    query = f"""SELECT "Acceleration-X", "Time-Stamp", "time"
    FROM "Acceleration"
    WHERE time>='{start_of_day}' AND time<='{end_of_day}'"""

    # Execute the query
    table = client.query(query=query, database="EDL-Acceleration", language='sql')

    # Convert to dataframe
    df = table.to_pandas().sort_values(by="time")

    slot_counter = 0

    a = df["Acceleration-X"].tolist()
    t = df["Time-Stamp"].tolist()

    res_a = []
    res_t = []

    print(t)

    n = len(a)

    for i in range(1,n):
        if (abs(t[i]-t[i-1]) > 5000):
            slot_counter+=1
        if (slot_counter==slot-1):
            res_a.append(a[i])
            res_t.append(t[i])
    
    print(res_t)

    m = min(res_t)
    for i in range(len(res_t)):
        res_t[i]-=m 
        res_t[i]/=1000

    return [res_a, res_t]


def get_latest_data_acceleration_y(date, slot):
    decoded_date = unquote(date)
    date_object = datetime.fromisoformat(decoded_date.rstrip('Z'))
    start_of_day = date_object.replace(hour=0, minute=0, second=0, microsecond=0).isoformat() + 'Z'
    end_of_day = date_object.replace(hour=23, minute=59, second=59, microsecond=999000).isoformat() + 'Z'

    query = f"""SELECT "Acceleration-Y", "Time-Stamp", "time"
    FROM "Acceleration"
    WHERE time>='{start_of_day}' AND time<='{end_of_day}'"""

    # Execute the query
    table = client.query(query=query, database="EDL-Acceleration", language='sql')

    # Convert to dataframe
    df = table.to_pandas().sort_values(by="time")
    
    slot_counter = 0

    a = df["Acceleration-Y"].tolist()
    t = df["Time-Stamp"].tolist()

    res_a = []
    res_t = []

    n = len(a)

    for i in range(1,n):
        if (abs(t[i]-t[i-1]) > 5000):
            slot_counter+=1
        if (slot_counter==slot-1):
            res_a.append(a[i])
            res_t.append(t[i])
    
    print(res_t)

    return [res_a, res_t]

def get_latest_data_acceleration_z(date, slot):
    decoded_date = unquote(date)
    date_object = datetime.fromisoformat(decoded_date.rstrip('Z'))
    start_of_day = date_object.replace(hour=0, minute=0, second=0, microsecond=0).isoformat() + 'Z'
    end_of_day = date_object.replace(hour=23, minute=59, second=59, microsecond=999000).isoformat() + 'Z'

    query = f"""SELECT "Acceleration-Z", "Time-Stamp", "time"
    FROM "Acceleration"
    WHERE time>='{start_of_day}' AND time<='{end_of_day}'"""

    # Execute the query
    table = client.query(query=query, database="EDL-Acceleration", language='sql')

    # Convert to dataframe
    df = table.to_pandas().sort_values(by="time")
    
    slot_counter = 0

    a = df["Acceleration-Z"].tolist()
    t = df["Time-Stamp"].tolist()

    res_a = []
    res_t = []
    print(t)
    
    n = len(a)

    for i in range(1,n):
        if (abs(t[i]-t[i-1]) > 5000):
            slot_counter+=1
        if (slot_counter==slot-1):
            res_a.append(a[i])
            res_t.append(t[i])
    
    print(res_t)

    return [res_a, res_t]

def perform_fourier_transform(acceleration_data):
    # Perform Fourier transform
    frequency_data = np.fft.fft(acceleration_data)
    magnitude = np.abs(frequency_data)
    phase = np.angle(frequency_data, deg=False)
    return [magnitude, phase]

def get_psd(acceleration_data):
    frequencies, psd = signal.welch(acceleration_data, fs=1000, nperseg=128)
    return [frequencies, psd]

def calculate_rms(in_data):
    # Convert the acceleration values to a NumPy array
    in_data = np.array(in_data)
    
    # Square each acceleration value
    squared_values = in_data ** 2
    
    # Calculate the mean (average) of the squared values
    mean_squared_value = np.mean(squared_values)
    
    # Take the square root of the mean to get the RMS
    rms = np.sqrt(mean_squared_value)
    
    return int(rms*100)/100

def integral(in_data, timestep):
    out_data = [0]  # Initialize velocity values with 0
    
    # Iterate over acceleration values starting from the second value
    for i in range(1, len(in_data)):
        # Calculate the area of the trapezoid formed by adjacent acceleration values
        area = (in_data[i] + in_data[i-1]) / 2 * timestep
        
        # Add the area to the previous velocity value to obtain the current velocity value
        out_data.append(out_data[-1] + area)
    
    return out_data

def calculate_velocity(acceleration_values, timestep):
    return integral(acceleration_values, timestep)

def calculate_displacement(acceleration_values, timestep):
    return integral(integral(acceleration_values, timestep), timestep)

def calculate_arms(acceleration_values):
    return calculate_rms(acceleration_values)

def calculate_vrms(v_data):
    return calculate_rms(v_data)

def calculate_ap2p(acceleration_values):
    return max(acceleration_values) - min(acceleration_values)

def calculate_kurtosis(acceleration_values):
    kurtosis = scipy.stats.kurtosis(acceleration_values)
    return kurtosis

def calculate_crest_factor(acceleration_values):
    # Calculate peak value
    peak_value = np.max(np.abs(acceleration_values))
    
    # Calculate RMS value
    rms_value = np.sqrt(np.mean(np.square(acceleration_values)))
    
    # Calculate crest factor
    if (rms_value==0):
        return 10000
    crest_factor = peak_value / rms_value
    
    return crest_factor

def calculate_total_slots(date):
    decoded_date = unquote(date)
    date_object = datetime.fromisoformat(decoded_date.rstrip('Z'))
    start_of_day = date_object.replace(hour=0, minute=0, second=0, microsecond=0).isoformat() + 'Z'
    end_of_day = date_object.replace(hour=23, minute=59, second=59, microsecond=999000).isoformat() + 'Z'

    query = f"""SELECT "Time-Stamp", "time"
    FROM "Acceleration"
    WHERE time>='{start_of_day}' AND time<='{end_of_day}'"""

    # Execute the query
    table = client.query(query=query, database="EDL-Acceleration", language='sql')

    # Convert to dataframe
    df = table.to_pandas().sort_values(by="time")
    t = df["Time-Stamp"].tolist()
    
    n = len(t)

    slot_counter = 0

    for i in range(1,n):
        if (abs(t[i]-t[i-1]) > 5000):
            slot_counter+=1
    
    if (n>0):
        slot_counter+=1
    # print("fuck")
    # print(slot_counter)

    return slot_counter
