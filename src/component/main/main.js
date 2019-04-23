import React, { Component } from 'react';

import * as THREE from 'three'

class Main extends Component {
    componentDidMount () {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        // ADD scene
        this.scene = new THREE.Scene()

        //ADD Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        this.camera.position.z = 4;
    }
    render () {
        return (
            <div>
                에헤헤
            </div>
        )
    }
}

export { Main }