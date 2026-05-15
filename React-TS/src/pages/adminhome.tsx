import Button from "../components/Button"
import '../style/myimage.css'
export default function AdminHome() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
        imageSize: 200,
    };
    return (
        <>
        <h1>Admin Home</h1><br/>
            <Button></Button><br/>
            <div>
            <img className="myimage"
            src={user.imageUrl}
            alt={"Photo of" + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}></img>
            <p>{user.name}</p>
            </div>
        </>
    )
}