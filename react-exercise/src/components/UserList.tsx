import React, { useCallback, useState } from "react";
import DataTable from "react-data-table-component";
import { columns } from "./columns";
import "../style/UserList.scss";
import trash from "../trash-solid.svg";
import { useMappedState, IState, useDispatch } from "../redux/store";
import User from "../model/User";

export default function UserList() {
  const [removeItemsArray, setRemoveItemsArray] = useState<string[]>();
  const { users } = useMappedState(
    useCallback(
      (state: IState) => ({
        users: state.users,
      }),
      []
    )
  );

  const dispatch = useDispatch();
  const deleteTodo = useCallback(
    () => dispatch({ type: "DELETE_USER", items: removeItemsArray ?? [] }),
    [dispatch, removeItemsArray]
  );

  const handleChange = (e: any) => {
    const tab: User[] = e.selectedRows;
    const selectedElements = tab.map((x) => x.email);
    setRemoveItemsArray(selectedElements);
  };

  return (
    <div className="UserList">
      <div className="data_table">
        <DataTable
          title="Baza użytkowników"
          columns={columns}
          data={users}
          selectableRowsHighlight={true}
          selectableRows
          noContextMenu={true}
          onSelectedRowsChange={handleChange}
        />
        <div className="remove">
          <button
            title="Usuń zaznaczone elementy"
            disabled={!removeItemsArray}
            onClick={deleteTodo}
          >
            <img style={{ width: "15px", height: "15px" }} src={trash}></img>
          </button>
        </div>
      </div>
    </div>
  );
}
