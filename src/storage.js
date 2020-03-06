import AsyncStorageFactory from '@react-native-community/async-storage';
import LegacyStorage from '@react-native-community/async-storage-backend-legacy';

const legacyStorage = new LegacyStorage();

const storage = AsyncStorageFactory.create(legacyStorage);
// user: {
//   name: string
//   age: number
// }

export default storage;
