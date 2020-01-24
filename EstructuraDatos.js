class Nodo {
    constructor(valor)
    {
        this._valor = valor;
        this._siguiente = null;
    }

    get valor()
    {
        return this._valor;
    }

    get siguiente()
    {
        return this._siguiente;
    }

    set valor(nValor)
    {
        this._valor = nValor;
    }

    set siguiente(nSiguiente)
    {
        this._siguiente = nSiguiente;
    }
}

class listaSimple {
    constructor()
    {
        this.inicio = null;
        this.final = null;
        this.length = 0;
    }

    invertir()
    {
        if(!this.inicio) return false;
        let nodo = this.inicio;
        this.inicio = this.final;
        this.final = nodo;

        let anterior = null;
        let siguiente;

        for(let i = 0; i < this.length; i++)
        {
            siguiente = nodo.siguiente;
            nodo.siguiente = anterior;
            anterior = nodo;
            nodo = siguiente;
        }
        return true;
    }
    push(val)
    {
        let newNodo = new Nodo(val);
        if(!this.inicio)
        {
            this.inicio = newNodo;
            this.final = newNodo;
        }
        else {
            this.final.siguiente = newNodo;
            this.final = newNodo;
        }
        this.length++;
        return this;
    }

    pop()
    {
        if(!this.inicio) return undefined;
        let current = this.inicio;
        let nFinal = current;
        while(current.siguiente)
        {
            nFinal = current;
            current = current.siguiente;
        }
        this.final = nFinal;
        this.final.siguiente = null;
        this.length--;
        if(this.length == 0)
        {
            this.inicio = null;
            this.final = null;
        }
        return current;
    }
    print()
    {
        let current = this.inicio;
        let contador = 0;
        let arr = [];
        while(contador < this.length)
        {
            arr.push(current.valor);
            current = current.siguiente; 
            contador++;
        }
        console.log(arr);   
    }
    
}

let lista = new listaSimple();
lista.push(1);
lista.push(2);
lista.push(3);
lista.push(4);
lista.push(5);

lista.print();
lista.invertir();
lista.print();

