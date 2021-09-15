import {types, flow} from 'mobx-state-tree';
import {IUsers, usersApi} from '../api/index';

export const User = types.model('User', {
    id: types.identifier,
    createdAt: types.string,
    name: types.string,
    avatar: types.string,
});

export const UserMe = User.named('UserMe');

const UsersStore = types.model('UsersStore', {
    users: types.maybe(types.array(User)),
    me: types.maybe(UserMe),
}).actions(self => {
    return {
        load: flow(function* () {
            self.users = yield usersApi.getUsers();
        }),
        afterCreate() {
            self.load();
        }
    }
})

export default UsersStore;