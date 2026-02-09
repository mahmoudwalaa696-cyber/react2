import { Link } from "react-router-dom";
import { shopF1, shopF2, shopF3 } from "../../assets";
const Caart = () => {
  return (
    <div>
      {/*  start Section Cart  */}
      <section id="cart" className="section-p1 ">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Imag</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>SubTotal</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Link href="#">
                  <i className="far fa-times-circle"></i>
                </Link>
              </td>
              <td>
                <img src={shopF1} alt="" />
              </td>
              <td>Cartoon Astrount T-Shirt</td>
              <td>$118.19</td>
              <td>
                <input type="number" defaultValue="1" />
              </td>
              <td>$118.19</td>
            </tr>

            <tr>
              <td>
                <Link href="#">
                  <i className="far fa-times-circle"></i>
                </Link>
              </td>
              <td>
                <img src={shopF2} alt="" />
              </td>
              <td>Cartoon Astrount T-Shirt</td>
              <td>$118.19</td>
              <td>
                <input type="number" defaultValue="1" />
              </td>
              <td>$118.19</td>
            </tr>

            <tr>
              <td>
                <Link href="#">
                  <i className="far fa-times-circle"></i>
                </Link>
              </td>
              <td>
                <img src={shopF3} alt="" />
              </td>
              <td>Cartoon Astrount T-Shirt</td>
              <td>$118.19</td>
              <td>
                <input type="number" defaultValue="1" />
              </td>
              <td>$118.19</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Caart;
