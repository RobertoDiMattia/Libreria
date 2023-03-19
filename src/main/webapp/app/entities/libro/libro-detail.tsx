import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './libro.reducer';

export const LibroDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const libroEntity = useAppSelector(state => state.libro.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="libroDetailsHeading">
          <Translate contentKey="libreriaApp.libro.detail.title">Libro</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{libroEntity.id}</dd>
          <dt>
            <span id="titolo">
              <Translate contentKey="libreriaApp.libro.titolo">Titolo</Translate>
            </span>
          </dt>
          <dd>{libroEntity.titolo}</dd>
          <dt>
            <span id="autore">
              <Translate contentKey="libreriaApp.libro.autore">Autore</Translate>
            </span>
          </dt>
          <dd>{libroEntity.autore}</dd>
          <dt>
            <span id="genere">
              <Translate contentKey="libreriaApp.libro.genere">Genere</Translate>
            </span>
          </dt>
          <dd>{libroEntity.genere}</dd>
          <dt>
            <span id="anno">
              <Translate contentKey="libreriaApp.libro.anno">Anno</Translate>
            </span>
          </dt>
          <dd>{libroEntity.anno}</dd>
          <dt>
            <span id="prezzo">
              <Translate contentKey="libreriaApp.libro.prezzo">Prezzo</Translate>
            </span>
          </dt>
          <dd>{libroEntity.prezzo}</dd>
          <dt>
            <span id="copertina">
              <Translate contentKey="libreriaApp.libro.copertina">Copertina</Translate>
            </span>
          </dt>
          <dd>{libroEntity.copertina}</dd>
        </dl>
        <Button tag={Link} to="/libro" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/libro/${libroEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default LibroDetail;
