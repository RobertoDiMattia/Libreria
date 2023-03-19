import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILibro } from 'app/shared/model/libro.model';
import { getEntity, updateEntity, createEntity, reset } from './libro.reducer';

export const LibroUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const libroEntity = useAppSelector(state => state.libro.entity);
  const loading = useAppSelector(state => state.libro.loading);
  const updating = useAppSelector(state => state.libro.updating);
  const updateSuccess = useAppSelector(state => state.libro.updateSuccess);

  const handleClose = () => {
    navigate('/libro');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...libroEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...libroEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="libreriaApp.libro.home.createOrEditLabel" data-cy="LibroCreateUpdateHeading">
            <Translate contentKey="libreriaApp.libro.home.createOrEditLabel">Create or edit a Libro</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="libro-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField label={translate('libreriaApp.libro.titolo')} id="libro-titolo" name="titolo" data-cy="titolo" type="text" />
              <ValidatedField label={translate('libreriaApp.libro.autore')} id="libro-autore" name="autore" data-cy="autore" type="text" />
              <ValidatedField label={translate('libreriaApp.libro.genere')} id="libro-genere" name="genere" data-cy="genere" type="text" />
              <ValidatedField label={translate('libreriaApp.libro.anno')} id="libro-anno" name="anno" data-cy="anno" type="text" />
              <ValidatedField label={translate('libreriaApp.libro.prezzo')} id="libro-prezzo" name="prezzo" data-cy="prezzo" type="text" />
              <ValidatedField
                label={translate('libreriaApp.libro.copertina')}
                id="libro-copertina"
                name="copertina"
                data-cy="copertina"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/libro" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LibroUpdate;
