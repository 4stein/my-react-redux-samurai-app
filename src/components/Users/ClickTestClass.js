import React from "react";
import s from './Users.module.sass';
// import axios from "axios";
import {NavLink} from "react-router-dom";


function Users(props) {

    // console.log(props);

    // if (props.users.length === 0) {
    //     // props.setUsers([
    //     //     {id: 1, followed: false, name: 'Name 1', status: 'boss',      location: {country: 'Ukraine',  city: 'Kiev'},   photo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Default_User_Logo.jpg'},
    //     //     {id: 2, followed: true,  name: 'Name 2', status: 'developer', location: {country: 'Ukraine',  city: 'Lviv'},   photo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Default_User_Logo.jpg'},
    //     //     {id: 3, followed: false, name: 'Name 3', status: 'manager',   location: {country: 'Belarus',  city: 'Minsk'},  photo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Default_User_Logo.jpg'},
    //     //     {id: 4, followed: true,  name: 'Name 4', status: 'designer',  location: {country: 'Russia',   city: 'Moscow'}, photo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Default_User_Logo.jpg'}
    //     // ])
    //
    //     // props.toggleLoading(true);
    //     // axios('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //     //         props.setUsers(response.data.items);
    //     //     }
    //     // );
    //
    //     // fetch('http://jsonplaceholder.typicode.com/comments?postId=1')
    //     //     .then(response => response.json())
    //     //     .then(json => {
    //     //             // props.toggleLoading(false);
    //     //             props.setUsers(json);
    //     //         }
    //     // );
    //     /*
    //     * REDUX THUNK
    //     * */
    //     props.getUsersThunkCreator();
    //
    // }

    return (
        <>
            {/*{props.isFetching && <img width="128px" src='https://i.gifer.com/Sa7Y.gif' />}*/}

            {props.users.map(user => {
                return (
                    <div className={s.user__box} key={user.id}>
                        <div className={s.img__block}>
                            <div>
                                <NavLink to={`/profile${user.id}`}>
                                    <img
                                         src={user.photo !== undefined
                                            ? user.photo
                                            : 'https://upload.wikimedia.org/wikipedia/commons/9/91/Default_User_Logo.jpg'} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => props.unfollow(user.id)}>Follow</button>
                                    : <button onClick={() => props.follow(user.id)}>Unfollow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <span>
                                <div>{user.name}</div>
                            </span>
                        </div>
                    </div>
                )
            })}

            ClickTestClass

        </>
    );
}

export default Users;
