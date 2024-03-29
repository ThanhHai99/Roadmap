package services

import "adward/pkg/models"

type AdwardService interface {
	Save(adward models.Adward) models.Adward
	All() []models.Adward
}

type adwardService struct {
	adwards []models.Adward
}

func New() AdwardService {
	return &adwardService{}
}

func (service *adwardService) Save(adward models.Adward) models.Adward {
	service.adwards = append(service.adwards, adward)

	return adward
}

func (service *adwardService) All() []models.Adward {
	if service.adwards != nil {
		return service.adwards
	}

	return make([]models.Adward, 0)
}
