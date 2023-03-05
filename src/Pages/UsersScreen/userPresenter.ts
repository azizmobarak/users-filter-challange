import { store } from "src/reducer/store";
import { UsersViewAction } from "./actions";

interface usersPresentable {
    onFilter: (value: string) => void;
}

export const buildUsersPresenter = () => new UsersPresenter().builder();

export class UsersPresenter {

    public builder(): usersPresentable {
        return {
            onFilter: this.onFilter,
        }
    }

    private onFilter(value: string) {
        store.dispatch(UsersViewAction.setSearchValue(value))
        store.dispatch(UsersViewAction.setFilteredList(value))
    }
}