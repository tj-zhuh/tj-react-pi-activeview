import React from 'react';

class PiActiveView extends React.Component {

  render() {

    

    const { url } = this.props;

    const classId = "clsid:4F26B906-2854-11D1-9597-00A0C931BFC8";
    const progId = "PBDCTRL.PbdCtrl.1";

    let activeXIsAvailable = !!window.ActiveXObject || ("ActiveXObject" in window);

    if (!activeXIsAvailable) {
      return (<div>您的浏览器不支持该功能，请使用IE浏览器，或360浏览器的IE兼容模式</div>);
    }

    function checkPIActiveX() {
      
      try {
        let tmp = new ActiveXObject(progId);
      } catch (e) {
        return false;
      }
      return true;
    }

    if (!checkPIActiveX()) {
      return (<div>请安装PI-ActiveView插件</div>);
    }

    if (!url) { 
      return null;
    }

    return (
      <div className="tj-react-pi-activeview">
        <object
          classID={classId}
          style={{ width: '100%', height: '100%' }}
        >
          <param name="DisplayURL" value={url}></param>
        </object>
      </div>
    )
  }
}

export default PiActiveView;