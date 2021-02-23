function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fixedAutoChecker(thisElement) {
    if (thisElement.parentNode.parentNode.children[1].children[0].tagName === "INPUT") {
        if (thisElement.value) {
            thisElement.parentNode.parentNode.children[1].children[0].checked = true;
        } else {
            thisElement.parentNode.parentNode.children[1].children[0].checked = false;
        }
    } else {
        if (thisElement.value) {
            thisElement.parentNode.parentNode.children[1].children[0].children[0].checked = true;
        } else {
            thisElement.parentNode.parentNode.children[1].children[0].children[0].checked = false;
        }
    }
}

function fixedClosedAutoChecker(thisElement) {
    if (!thisElement.parentNode.parentNode.children[1].children[0].checked) {
        thisElement.parentNode.parentNode.children[1].children[0].checked = true;
    } else {
        thisElement.parentNode.parentNode.children[1].children[0].checked = false;
    }
}

function flexibleAutoChecker(thisElement) {
    if (thisElement.value) {
        thisElement.parentNode.children[0].checked = true;
    } else {
        thisElement.parentNode.children[0].checked = false;
    }
}

function flexibleClosedAutoChecker(thisElement) {
    if (!thisElement.parentNode.children[0].checked) {
        thisElement.parentNode.children[0].checked = true;
    } else {
        thisElement.parentNode.children[0].checked = false;
    }
}

function emptyFieldAlert() {
    debugger;
    if (emptyFieldNumber) {
        if (emptyFieldNumber > 1) {
            window.alert("Oops, it looks like " + emptyFieldNumber + " inputs are empty.");
        } else {
            window.alert("Oops, it looks like 1 input is empty.");
        }
    }
}

function copyToClipboard(elementId) {
    document.getElementById(elementId).select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
}

function checkVisibleCheckboxes() {
    let checkboxes = document.getElementsByClassName("cb");
    for (checkbox of checkboxes) {
        if (checkbox.parentNode.tagName == "TD") {
            if (checkbox.parentNode.parentNode.parentNode.parentNode.parentNode.style.display != 'none') {
                checkbox.checked = true;
            }
        } else if (checkbox.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display != 'none') {
            checkbox.checked = true;
        }
    }
}

function uncheckVisibleCheckboxes() {
    let checkboxes = document.getElementsByClassName("cb");
    for (checkbox of checkboxes) {
        if (checkbox.parentNode.tagName == "TD") {
            if (checkbox.parentNode.parentNode.parentNode.parentNode.parentNode.style.display != 'none') {
                checkbox.checked = false;
            }
        } else if (checkbox.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display != 'none') {
            checkbox.checked = false;
        }
    }
}

function isChecked(checkboxId) {
    const cb = document.getElementById(checkboxId).checked;
    return cb;
}

function toggleElementGroup(elementGroupId) {
    let elementGroup = document.getElementById(elementGroupId);
    if (elementGroup.style.display === 'none') {
        elementGroup.style.display = 'block';
    }
    else {
        elementGroup.style.display = 'none';
    }
}

function addFixedToken(parentId, labelHTML, listNumber, textNumber, listFirst, datalistId) {
    debugger;
    let parent = document.getElementById(parentId);
    let divi = document.createElement("div");
    let cb = document.createElement("input");
    let label = document.createElement("label");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("class", "cb");
    label.innerHTML = labelHTML;
    divi.appendChild(cb);
    divi.appendChild(label);
    listNumber = listNumber ? listNumber : 0;
    textNumber = textNumber ? textNumber : 0;
    if (listFirst) {
        while (listNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
        while (textNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
    } else {
        while (textNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
        while (listNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
    }
    parent.appendChild(divi);
}

function addFlexibleToken(parentId, labelHTML, defaultListNumber, defaultTextNumber, listFirst, datalistId, listNumberId, textNumberId) {
    let parent = document.getElementById(parentId);
    let divi = document.createElement("div");
    let cb = document.createElement("input");
    let label = document.createElement("label");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("class", "cb");
    label.innerHTML = labelHTML;
    divi.appendChild(cb);
    divi.appendChild(label);
    let listNumber = defaultListNumber;
    let textNumber = defaultTextNumber;
    if (document.getElementById(listNumberId) && document.getElementById(listNumberId).value != "") {
        listNumber = document.getElementById(listNumberId).value
    }
    if (document.getElementById(textNumberId) && document.getElementById(textNumberId).value != "") {
        textNumber = document.getElementById(textNumberId).value
    }
    if (listFirst) {
        while (listNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
        while (textNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
    } else {
        while (textNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
        while (listNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
    }
    parent.appendChild(divi);
}

function addFlexibleTokenInput(parentId, labelHTML, defaultListNumber, defaultTextNumber, listFirst, datalistId) {
    let parent = document.getElementById(parentId);
    let divi = document.createElement("div");
    let cb = document.createElement("input");
    let addButton = document.createElement("button");
    let removeButton = document.createElement("button");
    let label = document.createElement("label");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("class", "cb");
    addButton.innerHTML = "+";
    removeButton.innerHTML = "-";
    label.innerHTML = labelHTML;
    divi.appendChild(cb);
    divi.appendChild(addButton);
    divi.appendChild(removeButton);
    divi.appendChild(label);
    let listNumber = defaultListNumber;
    let textNumber = defaultTextNumber;
    const tokens = parent.children;
    const len = tokens.length - 1;
    do {
        let children = tokens[len].children;
        if (tokens[len].children[1].innerHTML === labelHTML) {
            listnumber = tokens[len].children.length - 4;
        }
    }
    while ()
    if (listFirst) {
        while (listNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
        while (textNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
    } else {
        while (textNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
        while (listNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
    }
    parent.appendChild(divi);
}
function addFixedClosedToken(parentId, labelHTML) {
    debugger;
    let parent = document.getElementById(parentId);
    let divi = document.createElement("div");
    let cb = document.createElement("input");
    let label = document.createElement("label");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("class", "cb");
    label.innerHTML = labelHTML;
    label.addEventListener("click", function () { flexibleClosedAutoChecker(this) })
    divi.appendChild(cb);
    divi.appendChild(label);
    parent.appendChild(divi);
}

function removeTokenFromGroup(parentId, labelHTML) {
    let parent = document.getElementById(parentId);
    let children = parent.children;
    let len = children.length;
    for (let i = len - 1; i > 0; i--) {
        if (removeElement) {
            break;
        }
        if (children[i].tagName === "DIV") {
            let subChildren = children[i].children;
            for (subChild of subChildren) {
                if (subChild.innerHTML === labelHTML) {
                    var removeElement = children[i];
                    break;
                }
            }
        }
    }
    removeElement.parentNode.removeChild(removeElement);
}

function addList(parentId, datalistId) {
    let list = document.createElement("input");
    list.setAttribute("list", datalistId);
    list.addEventListener("change", function () { fixedAutoChecker(this) })
    document.getElementById(parentId).appendChild(list);
}

function addTextField(parentId) {
    let textField = document.createElement("input");
    textField.setAttribute("type", text);
    document.getElementById(parentId).appendChild(textField);
}

function removeField(parentId, minFieldNumber) {
    let parent = document.getElementById(parentId);
    let children = parent.children;
    if (children.length > minFieldNumber + 1) {
        let removeValue = children[children.length - 1]
        removeValue.parentNode.removeChild(removeValue);
    };
}

function parseSpecificToken(rawArray, checkboxId, parentId) {
    if (isChecked(checkboxId)) {
        let parent = document.getElementById(parentId);
        const children = parent.children;
        let tokenString = "";
        for (child of children) {
            if (child.tagName == "LABEL") {
                tokenString = child.innerHTML;
                tokenString = tokenString.slice(0, -1);
            }
            if (child.tagName == "INPUT") {
                tokenString += ":" + child.value;
                if (!child.value) {
                    emptyFieldNumber++;
                }
            }
        }
        rawArray.push(tokenString + "]");
    }
}

function parseTokenGroup(rawArray, parentId) {
    let parent = document.getElementById(parentId);
    let children = parent.children;
    for (child of children) {
        parseToken(rawArray, child)
    }
}

function parseToken(rawArray, divi) {
    const children = divi.children;
    if (children[0].checked) {
        let tokenString = "";
        for (child of children) {
            if (child.tagName == "LABEL") {
                tokenString = child.innerHTML;
                tokenString = tokenString.slice(0, -1);
            }
            if (child.tagName == "INPUT") {
                tokenString += ":" + child.value;
                if (!child.value) {
                    emptyFieldNumber++;
                }
            }
        }
        rawArray.push(tokenString + "]");
    }
}
