import s from './Profile.module.sass';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className="col-md-10 p-0">
      <div className={s.content}>
        <img className={s.top__img} src="https://jstack.ru/img/GatsbyReact/react.jpeg" alt="" />
        <div className={s.profile}>
          <div className={s.profile__img}>
            <img src="https://webstockreview.net/images/profile-icon-png-9.png" alt="" />
          </div>
          <div className={s.profile__text}>
            <h4>Mihail D.</h4>
            <p>Date of Birth 29 March</p>
            <p>CiTy: Kiev</p>
            <p>Education: DUT</p>
            <p>Web Site: http://4stein.online</p>
          </div>
        </div>
        <MyPosts/>
      </div>
    </div>
  );
}

export default Profile;
