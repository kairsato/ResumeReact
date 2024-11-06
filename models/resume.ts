interface Resume {
    header: {
        name:string,
        info:string,
        attributes: Array<Attribute>
    },
    body:Array<Section>
}

interface Attribute{
    icon? :string,
    title? :string,
    value :string
}

interface Section {
    title:string,
    icon?:string,
    points:Array<Point>

}

interface Point{
    title:string,
    subtitle?:string,
    content?:string,
    dates?:string
}