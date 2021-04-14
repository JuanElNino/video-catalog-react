import React, { Component } from "react";

class Images extends Component {
    state = {
        error: null,         // jika terjadi gagal ambil data dari API
        isLoaded: false,     // untuk status ketika sedang memuat
        dataGambar: []      // untuk menampung data API
    };
    componentDidMount() {
        fetch("https://my-json-server.typicode.com/AgustinaVivi/videoCatalogApi/video")
            .then(response => response.json())
            .then(
                (dataJson) => {
                    this.setState({
                        isLoaded: true,
                        dataGambar: dataJson
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }
    render() {
        const { error, isLoaded, dataGambar } = this.state;

        if (error) {
            return <div>Terjadi galat: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Sedang memuat...</div>;
        } else {
            return (
                <div>
                    {
                        dataGambar.map(video => {
                            return <DaftarGambar title={video.title} desc={video.description} url={video.url} />
                        })
                    }
                </div>
            );
        }
    }

}
function DaftarGambar(props) {
    console.log(props)
    return (
        <div class="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
            <div class="position-relative tm-thumbnail-container">
                <img src={props.url} alt="Image" class="img-fluid tm-catalog-item-img" />
                <a href="/video" class="position-absolute tm-img-overlay">
                    <i class="fas fa-play tm-overlay-icon"></i>
                </a>
            </div>
            <div class="p-4 tm-bg-gray tm-catalog-item-description">
                <h3 class="tm-text-primary mb-3 tm-catalog-item-title">{props.title}</h3>
                <p class="tm-catalog-item-text">{props.desc}</p>
            </div>
        </div>

    );

}
export default Images