
import * as SecureStore from 'expo-secure-store';

export const removeFromStore = async (key) => {
    await SecureStore.deleteItemAsync(key);
}