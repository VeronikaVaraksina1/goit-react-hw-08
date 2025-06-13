import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../lib/firebase';

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      const user = userCredential.user;

      return {
        user: {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
        },
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return {
      user: {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      },
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe();

      if (user) {
        resolve({
          user: {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          },
        });
      } else {
        reject(thunkAPI.rejectWithValue('No user found'));
      }
    });
  });
});
