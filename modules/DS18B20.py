import machine, onewire, ds18x20

def read(pin):
    ds_pin = machine.Pin(pin)
    ds_sensor = ds18x20.DS18X20(onewire.OneWire(ds_pin))
    roms = ds_sensor.scan()
    ds_sensor.convert_temp()
    t = -999.0
    for rom in roms:
        t = ds_sensor.read_temp(rom)
    return t
