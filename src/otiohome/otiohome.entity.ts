export interface Property {
    PropertyId: string;
    CurrentValue: string;
    LocalDate: number;
}

export interface Device {
    Name: string;
    DeviceId: string;
    Properties: Property[];
    DeviceTypeId: string
}