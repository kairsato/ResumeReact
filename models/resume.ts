interface Resume {
    header: {
        name:string,
        info:string,
        attributes: Array<Attribute>
    },
    body:Array<Section>
}

interface Attribute{
    order: number,
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
    order: number,
    title:string,
    subtitle?:string,
    content?:string,
    dates?:string
}