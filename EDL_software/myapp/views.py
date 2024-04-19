from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .helpers import *

timestep = 1

# Create your views here.
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})


@api_view(['GET'])
def api_data(request):
    data = {'x': [1,2,3],
            'y': [3,4,5],
            }
    return Response(data)

@api_view(['GET'])
def api_acceleration_data(request):
    date = request.GET["date"]
    slot = int(request.GET["slot"])
    a_x_c = get_latest_data_acceleration_x(date, slot)
    a_y_c = get_latest_data_acceleration_y(date, slot)
    a_z_c = get_latest_data_acceleration_z(date, slot)
    a_x = a_x_c[0]
    a_y = a_y_c[0]
    a_z = a_z_c[0]
    kurtosis_x = calculate_kurtosis(a_x)
    kurtosis_y = calculate_kurtosis(a_y)
    kurtosis_z = calculate_kurtosis(a_z)
    crest_factor_x = calculate_crest_factor(a_x)
    crest_factor_y = calculate_crest_factor(a_y)
    crest_factor_z = calculate_crest_factor(a_z)
    a_rms_x = calculate_rms(a_x)
    a_rms_y = calculate_rms(a_y)
    a_rms_z = calculate_rms(a_z)
    f_phase = perform_fourier_transform(a_x)[1]
    f_mag = perform_fourier_transform(a_x)[0]
    psd_f = get_psd(a_x)[0]
    psd_m = get_psd(a_y)[1]
    data = {'time': a_x_c[1], 'a_x': a_x, 'a_y': a_y, 'a_z': a_z, 'kurtosis_x':kurtosis_x, 'kurtosis_y': kurtosis_y, 'kurtosis_z': kurtosis_z
            , 'crest_factor_x':crest_factor_x, 'crest_factor_y': crest_factor_y, 'crest_factor_z': crest_factor_z, 'a_rms_x': a_rms_x, 
            'a_rms_y': a_rms_y, 'a_rms_z': a_rms_z, 'indices': [i for i in range(len(a_x))], 'f_phase': f_phase, 'f_mag': f_mag, 'psd_f': psd_f, 'psd_m': psd_m,}
    return Response(data)

@api_view(['GET'])
def api_velocity_data(request):
    date = request.GET["date"]
    slot = int(request.GET["slot"])
    a_x_c = get_latest_data_acceleration_x(date, slot)
    a_y_c = get_latest_data_acceleration_y(date, slot)
    a_z_c = get_latest_data_acceleration_z(date, slot)
    a_x = a_x_c[0]
    a_y = a_y_c[0]
    a_z = a_z_c[0]
    ##print(a_x)
    v_x = calculate_velocity(a_x, timestep)
    v_y = calculate_velocity(a_y, timestep)
    v_z = calculate_velocity(a_z, timestep)
    v_rms_x = calculate_rms(v_x)
    v_rms_y = calculate_rms(v_y)
    v_rms_z = calculate_rms(v_z)
    data = {'time': a_x_c[1], 'v_x': v_x, 'v_y': v_y, 'v_z': v_z, 'v_rms_x':v_rms_x, 'v_rms_y': v_rms_y, 'v_rms_z': v_rms_z,}
    return Response(data)


@api_view(['GET'])
def api_e_data(request):
    date = request.GET["date"]
    slot = int(request.GET["slot"])
    temp = get_latest_data_temperature(date, slot)
    hum = get_latest_data_humidity(date, slot)
    data = {'temp': temp, 'humidity': hum, }
    return Response(data)


@api_view(['GET'])
def api_slot_data(request):
    date = request.GET["date"]
    slots = calculate_total_slots(date)
    data = {'slots': slots,}
    return Response(data)