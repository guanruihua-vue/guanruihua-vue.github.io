import { ref, type Ref, type UnwrapRef } from 'vue'
import { isEffectObject } from 'asura-eye'
import type { ObjectType } from '0type'

export type RefValue<T = any> = Ref<T, T> | Ref<UnwrapRef<T>, T | UnwrapRef<T>> | (Ref<any, any> & ObjectType<any>)

export const useSetState = <T extends ObjectType<any>>(
  defaultState: T = {} as T,
): [RefValue<T>, (newState: T) => void] => {
  const state = ref<T>(defaultState)

  const setState = (newState: any) => {
    if (isEffectObject(newState)) {
      Object.keys(newState).forEach((key: string) => {
        state.value[key] = newState[key]
      })
    }
  }
  return [state, setState]
}
