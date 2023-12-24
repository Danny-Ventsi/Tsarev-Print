/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const DropdownBag = (props) => {
  if (
    sessionStorage.getItem("token") === null ||
    sessionStorage.getItem("token") === ""
  ) {
    if (props.bagItems.length === 0) {
      return (
        <div className="dropdown">
          <div className="bag-triangle-down"></div>
          <div className="dropdown-content">
            <h4>Bag</h4>
            <p>Your bag is currently empty</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dropdown">
          <div className="bag-triangle-down"></div>
          <div className="dropdown-content">
            <h4>Bag</h4>
            {props.bagItems.map((item) => (
              <p
                style={{
                  padding: "20px",
                  margin: "-1px",
                  marginLeft: "0px",
                  borderBottom: "1px solid white",
                  borderTop: "1px solid white",
                }}
                key={item.item.id}
              >
                {" "}
                <button
                  onClick={() => {
                    for (let i = 0; i < props.bagItems.length; ++i) {
                      if (item.item.name === props.bagItems[i].item.name) {
                        let itemIndex = props.bagItems.indexOf(item);
                        props.setPrice(
                          props.price - item.quantity * item.item.price
                        );
                        props.setNumOfItemsInBag(
                          props.numOfItemsInBag - item.quantity
                        );
                        if (props.numOfItemsInBag - item.quantity === 0) {
                          document.getElementById("displayNum").style.display =
                            "none";
                          document.getElementById("circle").style.display =
                            "none";
                        }
                        props.bagItems.splice(itemIndex, 1);
                        break;
                      }
                    }
                  }}
                  style={{
                    padding: "0px 6px 0px",
                    borderColor: "#ef233c",
                    backgroundColor: "#ef233c",
                    display: "inline",
                    position: "absolute",
                    left: "5px",
                  }}
                  className="closeButton"
                >
                  -
                </button>
                <span
                  style={{ position: "relative", top: "-25px", left: "-20px" }}
                >
                  <img
                    style={{
                      top: "15px",
                      left: "-10px",
                      height: "40px",
                      width: "40px",
                    }}
                    src={`data:image/png;base64,${item.item.photo}`}
                  />
                  {item.item.name} x {item.quantity}
                </span>
              </p>
            ))}
          </div>
          <div className="content-rest">
            <p>Total price: {props.price}</p>
            <Link
              to="/bag"
              state={{ items: props.bagItems, price: props.price }}
            >
              <button className="bagbutton">View items in Bag</button>
            </Link>
          </div>
        </div>
      );
    }
  } else {
    if (props.bagItems.length === 0) {
      return (
        <div className="dropdown">
          <div className="bag-triangle-down-logged"></div>
          <div className="dropdown-content">
            <h4>Bag</h4>
            <p>Your bag is currently empty</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="dropdown">
          <div className="bag-triangle-down-logged"></div>
          <div className="dropdown-content">
            <h4>Bag</h4>
            {props.bagItems.map((item) => (
              <p
                style={{
                  padding: "20px",
                  margin: "-1px",
                  marginLeft: "0px",
                  borderBottom: "1px solid white",
                  borderTop: "1px solid white",
                }}
                key={item.item.name}
              >
                {" "}
                <button
                  onClick={() => {
                    for (let i = 0; i < props.bagItems.length; ++i) {
                      if (item.item.name === props.bagItems[i].item.name) {
                        let itemIndex = props.bagItems.indexOf(item);
                        props.setPrice(
                          props.price - item.quantity * item.item.price
                        );
                        props.setNumOfItemsInBag(
                          props.numOfItemsInBag - item.quantity
                        );
                        if (props.numOfItemsInBag - item.quantity === 0) {
                          document.getElementById("displayNum").style.display =
                            "none";
                          document.getElementById("circle").style.display =
                            "none";
                        }
                        props.bagItems.splice(itemIndex, 1);
                        break;
                      }
                    }
                  }}
                  style={{
                    padding: "0px 6px 0px",
                    borderColor: "#ef233c",
                    backgroundColor: "#ef233c",
                    display: "inline",
                    position: "absolute",
                    left: "5px",
                  }}
                  className="closeButton"
                >
                  -
                </button>
                <span
                  style={{ position: "relative", top: "-25px", left: "-20px" }}
                >
                  <img
                    style={{
                      top: "15px",
                      left: "-10px",
                      height: "40px",
                      width: "40px",
                    }}
                    src={`data:image/png;base64,${item.item.photo}`}
                  />
                  {item.item.name} x {item.quantity}
                </span>
              </p>
            ))}
          </div>
          <div className="content-rest">
            <p>Total price: {props.price}</p>
            <Link
              to="/bag"
              state={{ items: props.bagItems, price: props.price }}
            >
              <button className="bagbutton">View items in Bag</button>
            </Link>
          </div>
        </div>
      );
    }
  }
};

export default DropdownBag;
