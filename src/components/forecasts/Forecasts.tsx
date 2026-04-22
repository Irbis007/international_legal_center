
import './style.css'

export function Forecasts() {
  return (
    <div className="forecasts">
      <div className="container">
        <div className="title">Affiliate Program <br /> Forecasts for 2021</div>
        <div className="forecasts-results">
          <div className="forecasts-result">
            <h5 className="forecasts-result_title">$2 mln.</h5>
            <p className="forecasts-result_subtitle">ILC partners will earn money</p>
          </div>
          <div className="forecasts-result">
            <h5 className="forecasts-result_title">10 000+</h5>
            <p className="forecasts-result_subtitle">Policies will be issued through affiliate links</p>
          </div>
          <div className="forecasts-result">
            <h5 className="forecasts-result_title">800+</h5>
            <p className="forecasts-result_subtitle">Partners will join us</p>
          </div>
          <div className="forecasts-result">
            <h5 className="forecasts-result_title">$1500</h5>
            <p className="forecasts-result_subtitle">Average monthly partner income</p>
          </div>
        </div>
      </div>
    </div>
  )
}
