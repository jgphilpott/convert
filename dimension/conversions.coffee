### Dimension Conversions ###

convertDimension =

    d2: {}
    d3: {}

### 2D Conversions ###

# Credit: https://stackoverflow.com/a/13091694/1544937
convertDimension.d2.d3 = d2$d3 = (x, y, zTarget = 0) ->

    vector = new THREE.Vector3()
    coordinates = new THREE.Vector3()

    vector.set (x / window.innerWidth) * 2 - 1, - (y / window.innerHeight) * 2 + 1, 0

    vector.unproject camera

    vector.sub(camera.position).normalize()

    distance = (zTarget - camera.position.z) / vector.z

    coordinates.copy(camera.position).add(vector.multiplyScalar distance)

    return coordinates

### 3D Conversions ###

# Credit: https://stackoverflow.com/a/36706930/1544937
convertDimension.d3.d2 = d3$d2 = (x, y, z) ->

    halfWidth = window.innerWidth / 2
    halfHeight = window.innerHeight / 2

    coordinates = new THREE.Vector3 x, y, z

    coordinates.project camera

    coordinates.x = coordinates.x * halfWidth + halfWidth
    coordinates.y = - coordinates.y * halfHeight + halfHeight

    return new THREE.Vector2 coordinates.x, coordinates.y