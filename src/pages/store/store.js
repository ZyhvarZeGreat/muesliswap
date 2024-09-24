import { create } from 'zustand';

const useStore = create((set) => ({
    state: {
        address: "",
        network: "",
        balance: 0,
        usdBalance: 0,
        isWalletConnected: false,
        walletName: "",
        assets: null,
    },
    setState: (newState) => set((state) => ({ ...state, ...newState })),
}));

export default useStore;