import "../css/PhotoCard2.css";
import Image from 'next/image';

export default function PhotoCard2() {
    return (
        <div className="photoCard-container">
            <div className="photoCard-wrapper">
                <div className="photoCard-group">
                    <div className="photoCard-background"></div>
                    <div className="photoCard-content">
                        <Image
                            className="avatarPhoto"
                            src="/photoAvatar.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
