import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface kullaniciTipi{
    kullanici_adi:string,
    rol:"kullanici"|"",
    id:string|null,
    sifre:string,
    aktifMi:boolean,
}
const initialState:kullaniciTipi={
    kullanici_adi:"",
    aktifMi:false,
    id:null,
    rol:"",
    sifre:"",
}
const girisSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<kullaniciTipi>) => {
            state.kullanici_adi = action.payload.kullanici_adi;
            state.id = action.payload.id;
            state.sifre = action.payload.sifre; // Şifreyi burada da tutalım ki tutarlılık olsun
            state.rol = "kullanici";
            state.aktifMi = true;
        },
        logout: (state) => {
            return initialState;
        },
        register: (state, action: PayloadAction<kullaniciTipi>) => {
            state.id = action.payload.id;
            state.kullanici_adi = action.payload.kullanici_adi;
            state.sifre = action.payload.sifre; // İŞTE EKSİK OLAN SATIR BU!
            state.rol = "kullanici";
            state.aktifMi = false;
        }
    }
});

export const {login,logout,register}=girisSlice.actions
export default girisSlice.reducer