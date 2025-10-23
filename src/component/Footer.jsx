export default function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="container-fluid">

                    <p className="copyright pull-right">
                        &copy;
                        <script>
                            document.write(new Date().getFullYear())
                        </script>
                        <a href="http://www.jaccs-mpmfinance.com/">JACCS MPM Finance</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}