import { useEffect, DependencyList, useReducer } from "react";
import { Table } from "dexie";
import db, { RickManagerDatabase } from "../db";

export enum TransactionState {
  Idle = "idle",
  Loading = "loading",
  Error = "error",
}

enum ActionType {
  Begin = "begin",
  Commit = "commit",
  Error = "error",
}

interface IAction {
  type: ActionType;
  payload?: any;
}

interface DBStore {
  state: TransactionState;
  error?: Error;
}

const initialStore: DBStore = {
  state: TransactionState.Idle,
  error: undefined,
};

const reducer = (store: DBStore, action: IAction): DBStore => {
  switch (action.type) {
    case ActionType.Begin:
      return { ...store, state: TransactionState.Loading, error: undefined };
    case ActionType.Commit:
      return { ...store, state: TransactionState.Idle, error: undefined };
    case ActionType.Error:
      return { ...store, state: TransactionState.Error, error: action.payload };
  }
};

export function useDB(
  cb: (db: RickManagerDatabase) => Promise<void>,
  tables: Table[],
  dependencies: DependencyList = []
): [TransactionState, Error | undefined] {
  const [store, dispatch] = useReducer(reducer, initialStore);
  useEffect(() => {
    db.transaction("r", tables, async () => {
      dispatch({ type: ActionType.Begin });
      await cb(db);
      dispatch({ type: ActionType.Commit });
    }).catch((e) => {
      dispatch({ type: ActionType.Error, payload: e });
    });
    // eslint-disable-next-line
  }, dependencies);
  return [store.state, store.error];
}
