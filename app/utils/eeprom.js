import Immutable from 'immutable';

const defaultEEPROM = [
  1, 1, 350, 34, 0, 2, 1, 1, 350, 4, 0, 2, 1, 1, 350, 14, 0, 2, 1, 1, 350, 24, 0,
  2, 1, 1, 350, 44, 1, 2, 1, 1, 0, 230, 0, 0, 1, 1, 70, 230, 0, 0, 1, 1, 200, 230,
  0, 0, 1, 1, 280, 230, 0, 0, 1, 2, 0, 230, 0, 0, 1, 2, 70, 230, 0, 0, 1, 2, 200,
  230, 0, 0, 1, 2, 280, 230, 0, 0, 1, 1, 350, 220, 0, 2, 1, 2, 5, 10, 0, 0, 1, 1,
  350, 1, 0, 1, 2, 5, 25, 0, 0, 1, 1, 10, 0, 0, 1, 1, 1, 295, 202, 1, 1, 70, 14,
  0, 0, 1, 1, 70, 24, 0, 0, 1, 2, 15, 1, 1, 30, 35, 20, 25, 25, 1, 1, 0, 1, 2, 0,
  2, 1, 6, 1200, 1, 7, 1200, 180, 25, 2, 1, 1, 1, 20, 0, 2, 0, 100, 0, 10, 0, 1000,
  1, 1, 5, 220, 0, 0, 1, 70, 220, 0, 0, 0, 255, 0, 0, 1, 2, 10, 50, 0, 0, 180, 133,
  1, 0, 180, 133, 1, 0, 40, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const eepromMapping = [
  ['armState', 'visibleOn'],
  ['armState', 'visibleOn'],
  ['armState', 'positionX'],
  ['armState', 'positionY'],
  ['armState', 'fontSize'],
  ['armState', 'hAlignment'],
  ['batteryVoltage', 'visibleOn'],
  ['batteryVoltage', 'visibleOn'],
  ['batteryVoltage', 'positionX'],
  ['batteryVoltage', 'positionY'],
  ['batteryVoltage', 'fontSize'],
  ['batteryVoltage', 'hAlignment'],
  ['batteryCurrent', 'visibleOn'],
  ['batteryCurrent', 'visibleOn'],
  ['batteryCurrent', 'positionX'],
  ['batteryCurrent', 'positionY'],
  ['batteryCurrent', 'fontSize'],
  ['batteryCurrent', 'hAlignment'],
  ['batteryRemaining', 'visibleOn'],
  ['batteryRemaining', 'visibleOn'],
  ['batteryRemaining', 'positionX'],
  ['batteryRemaining', 'positionY'],
  ['batteryRemaining', 'fontSize'],
  ['batteryRemaining', 'hAlignment'],
  ['flightMode', 'visibleOn'],
  ['flightMode', 'visibleOn'],
  ['flightMode', 'positionX'],
  ['flightMode', 'positionY'],
  ['flightMode', 'fontSize'],
  ['flightMode', 'hAlignment'],
  ['gpsStatus', 'visibleOn'],
  ['gpsStatus', 'visibleOn'],
  ['gpsStatus', 'positionX'],
  ['gpsStatus', 'positionY'],
  ['gpsStatus', 'fontSize'],
  ['gpsStatus', 'hAlignment'],
  ['gpsHdop', 'visibleOn'],
  ['gpsHdop', 'visibleOn'],
  ['gpsHdop', 'positionX'],
  ['gpsHdop', 'positionY'],
  ['gpsHdop', 'fontSize'],
  ['gpsHdop', 'hAlignment'],
  ['gpsLatitude', 'visibleOn'],
  ['gpsLatitude', 'visibleOn'],
  ['gpsLatitude', 'positionX'],
  ['gpsLatitude', 'positionY'],
  ['gpsLatitude', 'fontSize'],
  ['gpsLatitude', 'hAlignment'],
  ['gpsLongitude', 'visibleOn'],
  ['gpsLongitude', 'visibleOn'],
  ['gpsLongitude', 'positionX'],
  ['gpsLongitude', 'positionY'],
  ['gpsLongitude', 'fontSize'],
  ['gpsLongitude', 'hAlignment'],
  ['gps2Status', 'visibleOn'],
  ['gps2Status', 'visibleOn'],
  ['gps2Status', 'positionX'],
  ['gps2Status', 'positionY'],
  ['gps2Status', 'fontSize'],
  ['gps2Status', 'hAlignment'],
  ['gps2Hdop', 'visibleOn'],
  ['gps2Hdop', 'visibleOn'],
  ['gps2Hdop', 'positionX'],
  ['gps2Hdop', 'positionY'],
  ['gps2Hdop', 'fontSize'],
  ['gps2Hdop', 'hAlignment'],
  ['gps2Latitude', 'visibleOn'],
  ['gps2Latitude', 'visibleOn'],
  ['gps2Latitude', 'positionX'],
  ['gps2Latitude', 'positionY'],
  ['gps2Latitude', 'fontSize'],
  ['gps2Latitude', 'hAlignment'],
  ['gps2Longitude', 'visibleOn'],
  ['gps2Longitude', 'visibleOn'],
  ['gps2Longitude', 'positionX'],
  ['gps2Longitude', 'positionY'],
  ['gps2Longitude', 'fontSize'],
  ['gps2Longitude', 'hAlignment'],
  ['time', 'visibleOn'],
  ['time', 'visibleOn'],
  ['time', 'positionX'],
  ['time', 'positionY'],
  ['time', 'fontSize'],
  ['time', 'hAlignment'],
  ['absoluteAltitude', 'visibleOn'],
  ['absoluteAltitude', 'visibleOn'],
  ['absoluteAltitude', 'positionX'],
  ['absoluteAltitude', 'positionY'],
  ['absoluteAltitude', 'fontSize'],
  ['absoluteAltitude', 'hAlignment'],
  ['altitudeScale', 'visibleOn'],
  ['altitudeScale', 'visibleOn'],
  ['altitudeScale', 'positionX'],
  ['altitudeScale', 'alignment'],
  ['altitudeScale', 'source'],
  ['speedGround', 'visibleOn'],
  ['speedGround', 'visibleOn'],
  ['speedGround', 'positionX'],
  ['speedGround', 'positionY'],
  ['speedGround', 'fontSize'],
  ['speedGround', 'hAlignment'],
  ['speedScale', 'visibleOn'],
  ['speedScale', 'visibleOn'],
  ['speedScale', 'positionX'],
  ['speedScale', 'alignment'],
  ['speedScale', 'source'],
  ['throttle', 'visibleOn'],
  ['throttle', 'visibleOn'],
  ['throttle', 'scaleEnabled'],
  ['throttle', 'positionX'],
  ['throttle', 'positionY'],
  ['homeDistance', 'visibleOn'],
  ['homeDistance', 'visibleOn'],
  ['homeDistance', 'positionX'],
  ['homeDistance', 'positionY'],
  ['homeDistance', 'fontSize'],
  ['homeDistance', 'hAlignment'],
  ['wpDistance', 'visibleOn'],
  ['wpDistance', 'visibleOn'],
  ['wpDistance', 'positionX'],
  ['wpDistance', 'positionY'],
  ['wpDistance', 'fontSize'],
  ['wpDistance', 'hAlignment'],
  ['compass', 'visibleOn'],
  ['compass', 'visibleOn'],
  ['compass', 'positionY'],
  ['radar', 'visibleOn'],
  ['radar', 'visibleOn'],
  ['radar', 'positionX'],
  ['radar', 'positionY'],
  ['radar', 'radius'],
  ['radar', 'homeRadius'],
  ['radar', 'wpRadius'],
  ['attitudeMP', 'visibleOn'],
  ['attitudeMP', 'visibleOn'],
  ['attitudeMP', 'mode'], // wtf?
  ['attitude3D', 'visibleOn'],
  ['attitude3D', 'visibleOn'],
  ['video', 'units'],
  ['video', 'maxPanels'],
  ['pwmVideo', 'visibleOn'],
  ['pwmVideo', 'channel'],
  ['pwmVideo', 'value'],
  ['pwmPanel', 'visibleOn'],
  ['pwmPanel', 'channel'],
  ['pwmPanel', 'value'],
  ['alarm', 'positionX'],
  ['alarm', 'positionY'],
  ['alarm', 'fontSize'],
  ['alarm', 'hAlignment'],
  ['alarm', 'gpsStatusEnabled'],
  ['alarm', 'lowBatteryEnabled'],
  ['alarm', 'lowBatteryValue'],
  ['alarm', 'underSpeedEnabled'],
  ['alarm', 'underSpeedValue'],
  ['alarm', 'overSpeedEnabled'],
  ['alarm', 'overSpeedValue'],
  ['alarm', 'underAltEnabled'],
  ['alarm', 'underAltValue'],
  ['alarm', 'overAltEnabled'],
  ['alarm', 'overAltValue'],
  ['climbRate', 'visibleOn'],
  ['climbRate', 'visibleOn'],
  ['climbRate', 'positionX'],
  ['climbRate', 'positionY'],
  ['climbRate', 'fontSize'],
  ['rssi', 'visibleOn'],
  ['rssi', 'visibleOn'],
  ['rssi', 'positionX'],
  ['rssi', 'positionY'],
  ['rssi', 'fontSize'],
  ['rssi', 'hAlignment'],
  ['rssi', 'min'],
  ['rssi', 'min'],
  ['rssi', 'raw'],
  ['fcType'],
  ['wind', 'visibleOn'],
  ['wind', 'visibleOn'],
  ['wind', 'positionX'],
  ['wind', 'positionY'],
  ['time', 'type'],
  ['throttle', 'scaleType'],
  ['attitudeMP', 'positionX'],
  ['attitudeMP', 'positionY'],
  ['attitudeMP', 'scaleReal'],
  ['attitudeMP', 'scaleFrac'],
  ['attitude3D', 'positionX'],
  ['attitude3D', 'positionY'],
  ['attitude3D', 'scaleReal'],
  ['attitude3D', 'scaleFrac'],
  ['attitude3D', 'mapRadius'],
  ['video', 'offsetY'],
  ['video', 'offsetX'],
  ['firmware', 'version'],
  ['video', 'videoMode'],
  ['speedScale', 'positionY'],
  ['altitudeScale', 'positionY'],
  ['batteryConsumed', 'visibleOn'],
  ['batteryConsumed', 'visibleOn'],
  ['batteryConsumed', 'positionX'],
  ['batteryConsumed', 'positionY'],
  ['batteryConsumed', 'fontSize'],
  ['batteryConsumed', 'hAlignment'],
  ['totalTrip', 'visibleOn'],
  ['totalTrip', 'visibleOn'],
  ['totalTrip', 'positionX'],
  ['totalTrip', 'positionY'],
  ['totalTrip', 'fontSize'],
  ['totalTrip', 'hAlignment'],
  ['rssi', 'type'],
  ['map', 'visibleOn'],
  ['map', 'visibleOn'],
  ['map', 'radius'],
  ['map', 'fontSize'],
  ['map', 'hAlignment'],
  ['map', 'vAlignment'],
  ['relativeAltitude', 'visibleOn'],
  ['relativeAltitude', 'visibleOn'],
  ['relativeAltitude', 'positionX'],
  ['relativeAltitude', 'positionY'],
  ['relativeAltitude', 'fontSize'],
  ['relativeAltitude', 'hAlignment'],
  ['altitudeScale', 'type'],
  ['speedAir', 'visibleOn'],
  ['speedAir', 'visibleOn'],
  ['speedAir', 'positionX'],
  ['speedAir', 'positionY'],
  ['speedAir', 'fontSize'],
  ['speedAir', 'hAlignment'],
  ['speedScale', 'type'],
  ['video', 'offsetX'],
  ['serial', 'uartBaudRate'],
];

const skeletonParameters = {
  'alarm': {},
  'altitudeAbsolute': {},
  'relativeAltitude': {},
  'altitudeScale': {},
  'armState': {},
  'attitude3D': {},
  'attitudeMP': {},
  'batteryConsumed': {},
  'batteryCurrent': {},
  'batteryRemaining': {},
  'batteryVoltage': {},
  'climbRate': {},
  'compass': {},
  'firmware': {},
  'flightMode': {},
  'gps2Hdop': {},
  'gps2Latitude': {},
  'gps2Longitude': {},
  'gps2Status': {},
  'gpsHdop': {},
  'gpsLatitude': {},
  'gpsLongitude': {},
  'gpsStatus': {},
  'homeDistance': {},
  'map': {},
  'pwmPanel': {},
  'pwmVideo': {},
  'radar': {},
  'rssi': {},
  'serial': {},
  'speedAir': {},
  'speedGround': {},
  'speedScale': {},
  'throttle': {},
  'time': {},
  'totalTrip': {},
  'video': {},
  'wind': {},
  'wpDistance': {},
};

export function toParameters(eepromData) {
  return eepromData.reduce((state, byte, index) => {
    if (!eepromMapping[index]) {
      return state;
    }

    return state.updateIn(eepromMapping[index], () => byte);
  }, Immutable.fromJS(skeletonParameters));
}
export function fromParameters() {
}

export default {
  defaultEEPROM,
  fromParameters,
  toParameters,
};