import React from 'react';

class Map extends React.Component {
    render() {
        return (
            <div class="gmap_canvas">
                <iframe width="100%" height="520" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        );
    }
}
export default Map;