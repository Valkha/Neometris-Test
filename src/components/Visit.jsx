import React from 'react';
import Frame from 'react-frame-component';

const MatterportIframe = () => {
    return (
        <Frame style={{ width: '100%', height: '100%' }}>
            <iframe
                src="https://my.matterport.com/show/?m=iuFTUE3GSUk"
                allowFullScreen
                title="Matterport Model C'est Fabriqué Ici"
                aria-label="Matterport 3D model viewer"
                frameBorder="0"
                style={{ width: '100%', height: '100%' }}
            />
        </Frame>
    );
};

export default MatterportIframe;