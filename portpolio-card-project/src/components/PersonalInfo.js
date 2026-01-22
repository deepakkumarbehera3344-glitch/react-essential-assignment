function PersonalInfo(){
    const name = "Deepak kumar Behera";
    const role = "Frontend Developer";
    const location = "Odisha";
    const email = "deepakkumarbehra3344@gmail.com";
 return(
    <div className="personal-info">
        <h2 className="name">{name}</h2>
        <p className="role">{role}</p>
        <p className="location">{location}</p>
        <p className="email">{email}</p>
    </div>
 );
}
export default PersonalInfo;