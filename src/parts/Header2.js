import { Component } from "react";
import {
    NavLink
} from "react-router-dom";

class Header2 extends Component {
    render() {
        return (
            <div class="position-relative">
                <div class="potition-absolute tm-site-header">
                    <div class="container-fluid position-relative">
                        <div class="row">
                            <div class="col-7 col-md-4">
                                <a href="/" class="tm-bg-black text-center tm-logo-container">
                                    <i class="fas fa-video tm-site-logo mb-3"></i>
                                    <h1 class="tm-site-name">Video Catalog</h1>
                                </a>
                            </div>
                            <div class="col-5 col-md-8 ml-auto mr-0">
                                <div class="tm-site-nav">
                                    <nav class="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
                                        <button class="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed" type="button"
                                            data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span>
                                                <i class="fas fa-bars tm-menu-closed-icon"></i>
                                                <i class="fas fa-times tm-menu-opened-icon"></i>
                                            </span>
                                        </button>
                                        <div class="collapse navbar-collapse tm-nav" id="navbar-nav">
                                            <ul class="navbar-nav text-uppercase">
                                                <li class="nav-item">
                                                    <a class="nav-link tm-nav-link" href="/">Videos</a>
                                                </li>
                                                <li class="nav-item active">
                                                    <a class="nav-link tm-nav-link" href="/about">About <span class="sr-only">(current)</span></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link tm-nav-link" href="/contact">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tm-welcome-container tm-fixed-header tm-fixed-header-2">
                    <div class="text-center">
                        <p class="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 mt-lg-0 mt-5 text-white mx-auto">Another Image BG<br />it can be fixed.<br />Content will simply slide over.</p>
                    </div>
                </div>
                <div id="tm-fixed-header-bg"></div>
            </div>
        );
    }
}

export default Header2