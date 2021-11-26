import { SubUnit } from "../sub-unit/sub-unit";

export interface Program {
    tahun: number;
    kodeUrusan: number;
    kodeBidang: number;
    kodeUnit: number;
    kodeSubUnit: number;
    kodeProgram: number;
    idProgram: number;
    keteranganProgram: string;
    tolakUkur: string;
    targetAngkat: number;
    targetUraian: string;
    kodeUrusan1: number;
    kodeBidang1: number;
    refSubUnit: SubUnit;
}  