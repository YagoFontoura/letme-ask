import copyImg from '../../assets/images/copy.svg'
import '../RoomCode/style.scss'

type RoomCodeProps = {
    code: string;
}
export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {

        navigator.clipboard.writeText(props.code)
    }
    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Imagem de cópia" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}