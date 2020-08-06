import React from 'react';


export default function PortfolioItem({portfolioItems}) {
  return (
    <div className="row parallax">
      {portfolioItems.map((portfolioItem) => {
        return (
          <article
            className="col-sm-6 col-md-offset-2 work-item card"
            style={{
              textAlign: 'center',
              justifyContent: 'space-between',
              border: '0px',
            }}
          >
            <img
              src={portfolioItem.image}
              alt={portfolioItem.projectName}
              width="100%"
              className="hovereffect"
              style={{ backgroundSize: 'cover' }}
            />
            <h2 style={{ textAlign: 'center', margin: '2px' }}>
              {portfolioItem.projectName}
            </h2>
            <p>{portfolioItem.projectdescription}</p>
            <span>
              <a
                href={portfolioItem.projectCode}
                target="_blank"
                className="brnone"
              >
                <button
                  type="button"
                  className="btn btn-outline-primary mb-1 w-100"
                >
                  Show Code
                </button>
              </a>
              <a
                href={portfolioItem.projectPage}
                target="_blank"
                className="brnone"
              >
                <button
                  type="button"
                  className="btn btn-outline-primary mt-1 w-100"
                >
                  Show Project
                </button>
              </a>
            </span>
          </article>
        );
      })}
    </div>
  );
}
