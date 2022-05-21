import React, { ChangeEvent, Component, RefObject } from "react";

interface UploadFileProps {
  innerRef?: RefObject<HTMLInputElement>;
}
interface UploadFileState {
  isLoading: boolean;
}
class UploadFile extends Component<UploadFileProps, UploadFileState> {
  inputRef: null | RefObject<HTMLInputElement> = null;
  constructor(props: UploadFileProps) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.inputRef = React.createRef<HTMLInputElement>();
  }

  onClickFile = () => {
    this.inputRef?.current?.click();
  };

  onGetFile = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
  }

  render(): React.ReactNode {
    return (
      <>
        <input style={{ display: 'none' }} type="file" ref={this.inputRef} onChange={this.onGetFile}/>
      </>
    );
  }
};

export default UploadFile
