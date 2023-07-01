import React from 'react'
import { motion } from "framer-motion"

export default function MobilePortfolio() {
  return (
    <div class="container">
        <section id="mobiledev">
            <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4}} viewport={{ once: true }}>
                <p class="h2 display-3 text-center">Mobile Development</p>
                <p class="text-center display-6 text-muted mb-5">Mobile Apps that I have developed for both iOS and Android</p>
            </motion.div>
            <div class="row">
                <div class="col-12 col-md-6 col-xl-3 mb-3">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/mobile/dad-jokes.gif" alt="Dad Jokes Mobile App"></img>
                            <div class="card-body">
                                <div class="col-12">
                                    <p class="display-5 text-center">Dad Jokes</p>
                                </div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#dadJokeModal">More Info</button>
                                    <a class="btn btn-outline-dark" href="https://github.com/codewithrandy/Dad-Jokes-iOS" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div class="col-12 col-md-6 col-xl-3 mb-3">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/mobile/nd-filter.gif" alt="FilterPro Mobile App"></img>
                            <div class="card-body">
                                <p class="display-5 text-center">FilterPro</p>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#filterProModal">More Info</button>
                                    <a class="btn btn-outline-dark" href="https://github.com/codewithrandy/" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div class="col-12 col-md-6 col-xl-3 mb-3">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/mobile/tic-tac.gif" alt="Tic Tac Toe Mobile App"></img>
                            <div class="card-body">
                                <p class="display-5 text-center">Tic Tac Toe</p>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#ticTacModal">More Info</button>
                                    <a class="btn btn-outline-dark" href="https://github.com/codewithrandy/Tic-Tac-Toe" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div class="col-12 col-md-6 col-xl-3 mb-3">
                    <motion.div initial={{opacity: 0, scale: 0.7}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} viewport={{ once: true }}>
                        <div class="card border-0" >
                            <img src="/img/mobile/hilo-feat.png" alt="HiLo Mobile App"></img>
                            <div class="card-body">
                                <p class="display-5 text-center">HiLo</p>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#hiloModal">More Info</button>
                                    <a class="btn btn-outline-dark" href="https://github.com/codewithrandy/" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        <section>
        <div class="modal fade" id="dadJokeModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="dadJokeModalLabel">iOS + Backend API</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                        <h2 class="display-5 fw-bold lh-1 mb-2">Dad Jokes</h2>            
                        <p class="lead">For this project, I built both the iOS app and the backend API for it to connect to. The mobile app was built using SwiftUI. The API features full CRUD and query operations and was built in Python & Django.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                            <a class="btn btn-outline-dark btn-lg px-4 me-md-2" href="https://github.com/codewithrandy/Dad-Jokes-API" target="_blank">GitHub API</a>
                            <a class="btn btn-outline-dark btn-lg px-4 me-md-2" href="https://github.com/codewithrandy/Dad-Jokes-iOS" target="_blank">GitHub App</a></div>
                        <div class="d-flex justify-content-center align-items-center">
                            <a href="https://apps.apple.com/us/app/dad-joke-generator/id1672114792?platform=iphone" target="_blank"><img class="mt-3" src="/img/apple-badge.png" width="175"></img></a>
                        </div>
                        <hr class="featurette-divider"></hr> 
                        <div class="row row-cols-2 g-3">
                            <div class="col d-flex align-items-start">
                                <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z" fill-rule="evenodd"></path> </svg>
                                <div>
                                    <h3 class="fw-bold mb-0 fs-4">&nbsp; SwiftUI</h3>
                                </div>
                            </div>
                            <div class="col d-flex align-items-start">
                                <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"></path> </svg>
                                <div>
                                    <h3 class="fw-bold mb-0 fs-4">&nbsp; Django</h3>
                                </div>
                            </div>
                            <div class="col d-flex align-items-start">
                                <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z" fill-rule="evenodd"></path> </svg>
                                <div>
                                    <h3 class="fw-bold mb-0 fs-4">&nbsp; Python</h3>
                                </div>
                            </div>
                            <div class="col d-flex align-items-start">
                                <svg class="bi bi-droplet-half" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" fill-rule="evenodd"></path> <path d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" fill-rule="evenodd"></path> </svg>
                                <div>
                                    <h3 class="fw-bold mb-0 fs-4">&nbsp; Animations</h3>
                                </div>
                            </div>
                        </div>             
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="filterProModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="filterProModalLabel">ND FilterPro Calculator</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                        <h2 class="display-5 fw-bold lh-1 mb-2">FilterPro</h2>            
                        <p class="lead">iOS app for photographers that calculates the correct exposure time from the base shutter speed and any combination of ND Filters</p>
                        <p class="lead">Includes system notifications and a timer that runs in the background to ensure 100% accuracy.</p>
                        <p class= "lead mb-2">Complete with On-Boarding, on first load, that explains the simplified UI/UX design.</p>
                        <div class="d-flex justify-content-center align-items-center mb-4">
                            <a href="https://apps.apple.com/us/app/nd-filter-pro-calculator/id6450627147" target="_blank"><img class="mt-3" src="/img/apple-badge.png" width="175"></img></a>
                        </div>
                        <hr class="featurette-divider"></hr>        
                        <div class="row row-cols-2 g-3">
                            <div class="col d-flex align-items-start"><svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z" fill-rule="evenodd"></path> </svg>
                                <div>
                                    <h3 class="fw-bold mb-0 fs-4">&nbsp; SwiftUI</h3>
                                </div>
                            </div>
                        <div class="col d-flex align-items-start"><svg class="bi bi-file-earmark-music" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z"></path> <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path> </svg>
                            <div>
                                <h3 class="fw-bold mb-0 fs-4">&nbsp; AVFoundation</h3>
                            </div>
                        </div>
                        <div class="col d-flex align-items-start"><svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path> </svg>
                            <div>
                            <h3 class="fw-bold mb-0 fs-4">&nbsp; Google Admob</h3>
                            </div>
                        </div>
                        <div class="col d-flex align-items-start"><svg class="bi bi-bell-fill" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/> </svg>
                            <div>
                                <h3 class="fw-bold mb-0 fs-4">&nbsp; Notifications</h3>
                            </div>
                        </div>
                        <div class="col d-flex align-items-start"><svg class="bi bi-droplet-half" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" fill-rule="evenodd"></path> <path d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" fill-rule="evenodd"></path> </svg>
                            <div>
                                <h3 class="fw-bold mb-0 fs-4">&nbsp; Animations</h3>
                            </div>
                        </div>
                        <div class="col d-flex align-items-start"><svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>
                            <div>
                                <h3 class="fw-bold mb-0 fs-4">&nbsp; Cocoapods</h3>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="ticTacModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ticTacModalLabel">Single Player AI</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <h2 class="display-5 fw-bold lh-1 mb-2">Tic Tac Toe</h2>            
                            <p class="lead">Classic Tic Tac Toe game built in SwiftUI using a MVVM design pattern. AI is designed to be beatable but to also make moves based on both the current and future states of the game.</p>
                            <a class="btn btn-outline-dark" href="https://github.com/codewithrandy/Tic-Tac-Toe" target="_blank">Github</a>
                            <hr class="featurette-divider"></hr>        
                            <div class="row row-cols-2 g-3">
                                <div class="col d-flex align-items-start">
                                    <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z" fill-rule="evenodd"></path> </svg>                        
                                    <div>
                                        <h3 class="fw-bold mb-0 fs-4">&nbsp; SwiftUI</h3>
                                    </div>
                                </div>
                                <div class="col d-flex align-items-start">
                                    <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path> </svg>                    
                                    <div>
                                        <h3 class="fw-bold mb-0 fs-4">&nbsp; MVVM</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="hiloModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="hiloModalLabel">Android Studio + Java</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <h2 class="display-5 fw-bold lh-1 mb-2">HiLo Card Game</h2>            
                            <p class="lead">HiLo is a retro-styled mobile card guessing game designed for Android. I developed this mobile app as a personal project to experiment with 2D animations in Java and the integration of Google Admob services.</p>
                            <div class="d-flex justify-content-center align-items-center">
                                <a href="https://play.google.com/store/apps/details?id=com.blacktop.hilo" target="_blank"><img src="/img/google_play_badge.png" width="200"></img></a>
                            </div>
                            <hr class="featurette-divider"></hr> 
                            <div class="row row-cols-2 g-3">
                                <div class="col d-flex align-items-start">
                                    <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.521 15.175a1.321 1.321 0 0 1-.082-.466h.765a.577.577 0 0 0 .073.27.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164.092-.11.138-.265.138-.466V11.85h.79v2.725c0 .44-.118.774-.357 1.005-.236.23-.564.345-.984.345a1.59 1.59 0 0 1-.568-.094 1.144 1.144 0 0 1-.408-.266 1.139 1.139 0 0 1-.243-.39Zm3.972-.354-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028H5.493Zm1.178-.59-.49-1.616h-.035l-.49 1.617h1.015Zm2.342 1.618h.952l1.327-3.999h-.878l-.888 3.138h-.038L8.59 11.85h-.917l1.34 3.999Zm3.087-1.028-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028H12.1Zm1.178-.59-.49-1.616h-.035l-.49 1.617h1.015Z" fill-rule="evenodd"></path> </svg>
                                    <div>
                                        <h3 class="fw-bold mb-0 fs-4">&nbsp; Java</h3>
                                    </div>
                                </div>
                                <div class="col d-flex align-items-start">
                                    <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path> </svg>
                                    <div>
                                        <h3 class="fw-bold mb-0 fs-4">&nbsp; Android Studio</h3>
                                    </div>
                                </div>
                                <div class="col d-flex align-items-start">
                                    <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path> </svg>
                                    <div>
                                        <h3 class="fw-bold mb-0 fs-4">&nbsp; Google Cloud</h3>
                                    </div>
                                </div>
                                <div class="col d-flex align-items-start">
                                    <svg class="bi bi-braces-asterisk" fill="currentColor" height="1.75em" viewBox="0 0 16 16" width="1.75em" xmlns="http://www.w3.org/2000/svg"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path> </svg>
                                    <div>
                                        <h3 class="fw-bold mb-0 fs-4">&nbsp; Google Admob</h3>
                                    </div>
                                </div>
                            </div>          
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}
