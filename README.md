# EDL
This is the course project for EE344 : Electronic Design Lab. We worked in a team of 4 to build a mountable wireless vibration sensor for structural health monitorting from scratch. Additionally we incorporated real time data acquisition and also built a GUI which displays the data over a period of time along with its analysis. My contribution included writing Embedded C code that programs the STM family of microcontrollers and Python code to perform analysis of the vibration data obtained.  THe key functionality of the code was to collect data from the sensors periodically, locally store it in an SD Card and then transmit it wirelessly using WiFi.
## CAD Resources:

- IIS3DWB: https://www.st.com/en/mems-and-sensors/iis3dwb.html#cad-resources

- ESP32-DEVKITV1: https://www.snapeda.com/parts/ESP32-DEVKIT-V1/Do%20it/view-part/

- Bluepill: https://github.com/piit79/Kicad-STM32

## Testing Resources:

- DHT-20:
   - Video Tutorial: https://www.youtube.com/watch?v=isOekyygpR8&t=9s

- STWIN-KIT:
    - MatLab scripts: Check folder STWIN_data

- WiFi module:
    - Video Tutorial:
    - Wifi Remote server: https://thingspeak.com/

- SD card:
    - Video tutorial for interfacing STM32 and SD card holder: https://www.youtube.com/watch?v=aqSNz26Cuio

- Literature Review :
    - https://www.researchgate.net/publication/267225017_Vibration_monitoring_of_bridges
    - https://www.mdpi.com/1424-8220/24/3/740#B87-sensors-24-00740
    - https://www.dataphysics.com/blog/modal-analysis/modal-testing-with-shaker-excitation
- Dataset for Motor Vibration Data : https://github.com/Charlie5DH/PredictiveMaintenance-and-Vibration-Resources
