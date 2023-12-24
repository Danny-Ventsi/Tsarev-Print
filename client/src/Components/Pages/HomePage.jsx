import { useEffect, useState } from "react"
import {useBetween} from "use-between"
import { useSharableState } from "../../App"
import LoadingContainer from "../Common/LoadingContainer"
import { Link } from "react-router-dom"

const itemsApi = "https://localhost:8443/products"
const itemsStyle = 
{
  borderRadius:"12px", 
  color: "#FDCA00", 
  display:"inline-block", 
  marginTop:"70px", 
  marginLeft:"15px", 
  padding:"10px 15px 15px", 
  backgroundColor:"#1c1c1c"
}

const itemImageStyle =
{
  position:"relative", 
  left:"0px", 
  width:"200px", 
  height:"200px"
}

export const useItems = () =>
{
    const [items, setItems] = useState([])
    return {
        items,
        setItems
    }

}


const HomePage = (props) =>
{
    if(sessionStorage.getItem("token") === null)
    {
      sessionStorage.setItem("token", "")
      document.location.reload()
    }
    const changeText = (event) =>
    {
        setShowAll(false)
        setSearchField(event.target.value)
    }

    const {setCartItems, cartItems, price, setPrice, setNumOfItemsInCart, numOfItemsInCart} = useBetween(useSharableState)

    const {items, setItems} = useBetween(useItems)
    const [itemsLoading, setItemsLoading] = useState([false])
    const [itemsRequestStatus, setItemsRequestStatus] = useState(200)
    const fetchData = async () =>
    {
      if(items.length === 0)
      {
        setItemsLoading(true);
        const receivedItems = await fetch(`${itemsApi}`)
        const status = receivedItems.status
        const receivedItemsJSON = await receivedItems.json()
        setItems(receivedItemsJSON)
        setItemsRequestStatus(status)
        setItemsLoading(false)
      }
      if(items.length > 0)
      {
        setItemsLoading(false)
      }
    }
    useEffect(() => {
      fetchData();
    }, []);

    const [showAll, setShowAll] = useState(true)
    const [searchField, setSearchField] = useState('')
    const itemsToShow = showAll ? items : items.filter(item => item.name.toLowerCase().includes(searchField))
    if (itemsRequestStatus !== 200)
    {
      return (<p>Something went wrong with your request.</p>);
    }
      return(
        <div>
            <div id="search">
                <input onChange={changeText} placeholder="Search" type="text"/>
            </div>
          <br/>
            {itemsLoading ? (<LoadingContainer />): 
            (<Items setNumOfItemsInCart ={setNumOfItemsInCart} numOfItemsInCart = {numOfItemsInCart} cartItems = {cartItems} setCartItems = {setCartItems} setPrice = {setPrice} price = {price} itemsToShow = {itemsToShow}/>)}
          </div>

      )
    }

    const Items = (props) =>
    {
      return(
        <div>
            {props.itemsToShow.map(item => <p key={item.id} style={itemsStyle}><Link to="/item"><img style={itemImageStyle} src={`data:image/png;base64,${item.photo}`}  alt={item.name}/><br/><br/><span style={{position:"relative"}}>{item.name}<br/><span style={{position:"relative"}}>{item.price.toFixed(2)}</span></span><br/><br/></Link><button style={{position:"relative"}} onClick={() =>
              {
                let flag = false;
                for(let i = 0; i < props.cartItems.length; ++i)
                {
                  if(props.numOfItemsInCart === "")
                  {
                    props.setNumOfItemsInCart(0)
                  }
                  if(item.name === props.cartItems[i].item.name)
                  {
                    props.cartItems[i].quantity++
                    props.setNumOfItemsInCart(parseInt(props.numOfItemsInCart+1))
                    flag = true;
                    props.setPrice(props.price + parseFloat(item.price))
                  }
                }
                let arr = [...props.cartItems]
                if(!flag)
                {
                  let cartItem = {
                    "item": item,
                    "quantity": 1
                  }
                  arr.push(cartItem)
                  props.setPrice(props.price + parseFloat(item.price))
      
                  props.setNumOfItemsInCart(parseInt(props.numOfItemsInCart+1))
                }
                props.setCartItems(arr)
              }}>Add to cart</button></p>)}
            
        </div>
      )
}
export default HomePage