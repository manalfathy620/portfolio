  <div className="cards">
      {arrr=="allprojects"&&arr.map((card)=>{
        return(
            <div key={card.id} className="right-section">
          <div className="img">
          <img src={card.img} alt="" />
          </div>

          <div className="content">
            <h2>{card.title}</h2>
            <p>
              {card.desc}
              
            </p>
            <div className="icons">
              <div className="icon1">
                <a href="" className="icon-link"></a>
                <a href="" className="icon-github"></a>
              </div>
              <div className="icon2">
                <a href="">more</a>
                <a href="" className="icon-arrow-right"></a>
              </div>
            </div>
          </div>
        </div>

        )
      })}
      {/* //////////////////////// */}
        {arrr=="html&css"&&arr.map((card)=>{
        

          
        return(
          card.track=="html&css"?
            <div key={card.id} className="right-section">
          <div className="img">
          <img src={card.img} alt="" />
          </div>

          <div className="content">
            <h2>{card.title}</h2>
            <p>
              {card.desc}
              
            </p>
            <div className="icons">
              <div className="icon1">
                <a href="" className="icon-link"></a>
                <a href="" className="icon-github"></a>
              </div>
              <div className="icon2">
                <a href="">more</a>
                <a href="" className="icon-arrow-right"></a>
              </div>
            </div>
          </div>
        </div>
        :""

        )
      
      })}
      {/* ////////////////////////////////////// */}
      {arrr=="js"&&arr.map((card)=>{
        
    
          
        return(
            card.track=="js"?(
          
            <div key={card.id} className="right-section">
          <div className="img">
          <img src={card.img} alt="" />
          </div>

          <div className="content">
            <h2>{card.title}</h2>
            <p>
              {card.desc}
              
            </p>
            <div className="icons">
              <div className="icon1">
                <a href="" className="icon-link"></a>
                <a href="" className="icon-github"></a>
              </div>
              <div className="icon2">
                <a href="">more</a>
                <a href="" className="icon-arrow-right"></a>
              </div>
            </div>
          </div>
        </div>
        

        ): ("")
        )
      })}
      {/* ///////////////////////////////////////////// */}
            {arrr=="react"&&arr.map((card)=>{
        
    
          
        return(
            card.track=="react"?(
          
            <div key={card.id} className="right-section">
          <div className="img">
          <img src={card.img} alt="" />
          </div>

          <div className="content">
            <h2>{card.title}</h2>
            <p>
              {card.desc}
              
            </p>
            <div className="icons">
              <div className="icon1">
                <a href="" className="icon-link"></a>
                <a href="" className="icon-github"></a>
              </div>
              <div className="icon2">
                <a href="">more</a>
                <a href="" className="icon-arrow-right"></a>
              </div>
            </div>
          </div>
        </div>
        

        ): ("")
        )
      })}
      {/* ///////////////////////////////////////// */}
      {arrr=="node"&&arr.map((card)=>{
        
    
          
        return(
            card.track=="node"?(
          
            <div key={card.id} className="right-section">
          <div className="img">
          <img src={card.img} alt="" />
          </div>

          <div className="content">
            <h2>{card.title}</h2>
            <p>
              {card.desc}
              
            </p>
            <div className="icons">
              <div className="icon1">
                <a href="" className="icon-link"></a>
                <a href="" className="icon-github"></a>
              </div>
              <div className="icon2">
                <a href="">more</a>
                <a href="" className="icon-arrow-right"></a>
              </div>
            </div>
          </div>
        </div>
        

        ): ("")
        )
      })}
      </div>