import Image from "next/image";
import { Nav } from "../components/navbar";

export default function Store() {
    return (
        <div>
            <Nav/>
            <main className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <Image src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}