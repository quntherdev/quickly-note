class BaseWindowNotification{

    // to put as a callback event in jsx
/*    const handleNotifyClick = () => {
        var notification = new BaseWindowNotification('Titre de la notif', 'Et voici le texte, corp du message', '../assets/pictures/notion-logo.svg', '2500');
        notification.notify();

        <input type="button" name="button" value="Notify me !" onClick={handleNotifyClick}></input>
    }*/

    constructor(header,content,iconPath,millisecondDuration) {
        this.header = header;
        this.content = content;
        this.iconPath = iconPath;
        this.duration = millisecondDuration;
    }

    notify(){
        Notification.requestPermission().then((permission) => {
            if(permission === "granted"){
                this.notification = new Notification(this.header,{
                    body:this.content,
                    icon:this.iconPath
                }) ;
            }
        });
    }
}

export default BaseWindowNotification;