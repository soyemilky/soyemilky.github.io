function AddItemPanel(item)
{
    var temp = document.createElement("div");
    var panel = document.createElement("div");
    panel.className = "item-panel";
    var cover = document.createElement("div");
    cover.className = "cover";
    var text = document.createElement("div");
    text.className = "text";

    temp.innerHTML = item.name;
    text.appendChild(temp);

    temp = document.createElement("div");
    var max_cost = item.options[0].price;
    var min_cost = item.options[0].price;
    for(var i = 0; i < item.options.length; i++)
    {
        if(item.options[i].price > max_cost)
        {
            max_cost = item.options[i].price;
        }

        if(item.options[i].price < min_cost)
        {
            min_cost = item.options[i].price;
        }
    }

    if(min_cost == max_cost)
    {
        if(min_cost == 0)
        {
            temp.innerHTML = "$"+min_cost.toString();
        }
        else
        {
            temp.innerHTML = "$"+min_cost.toString();
        }
    }
    else
    {
        temp.innerHTML = "$"+max_cost.toString() + " - $"+min_cost.toString();
    }
    text.appendChild(temp);

    panel.appendChild(cover);
    panel.appendChild(text);
    return panel;
}