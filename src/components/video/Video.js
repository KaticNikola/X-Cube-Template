import React, { Component } from 'react'

export class Video extends Component {
    render() {
        return (
            <div>
                <iframe src='https://www.youtube.com/watch?v=HIfFA8-RaHQ'
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
        )
    }
}

export default Video
